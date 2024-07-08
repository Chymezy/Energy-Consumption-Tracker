from models.user_model import User
from extensions import db
from flask import request, jsonify
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from werkzeug.utils import secure_filename
import os

class ProfilePictureAPI(Resource):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

    @jwt_required()
    def get(self):
        try:
            user_id = get_jwt_identity()
            print(f"User ID from JWT: {user_id}")  # Debug statement
            
            user = User.query.filter_by(username=user_id).first()
            print(f"User found: {user}")  # Debug statement

            if not user:
                return {'message': 'User not found'}, 404

            if not user.profile_picture:
                return {'message': 'User has no profile picture'}, 404

            return {
                'profile_picture': user.profile_picture.decode('utf-8')
            }, 200

        except Exception as e:
            print(f"Error: {str(e)}")  # Debug statement
            return {'message': f'Internal server error: {str(e)}'}, 500

    @jwt_required()
    def post(self):
        try:
            if 'file' not in request.files:
                return {'message': 'No file part in the request'}, 400

            file = request.files['file']

            if file.filename == '':
                return {'message': 'No file selected for uploading'}, 400

            if file and self.allowed_file(file.filename):
                user_id = get_jwt_identity()
                print(f"User ID from JWT: {user_id}")  # Debug statement
                
                user = User.query.filter_by(username=user_id).first()
                print(f"User found: {user}")  # Debug statement

                if not user:
                    return {'message': 'User not found'}, 404

                # Save the file content to the database as binary data
                user.profile_picture = file.read()
                db.session.commit()

                return {'message': 'File successfully uploaded'}, 201
            else:
                return {'message': 'Allowed file types are png, jpg, jpeg, gif'}, 400

        except Exception as e:
            print(f"Error: {str(e)}")  # Debug statement
            return {'message': f'Internal server error: {str(e)}'}, 500

    def allowed_file(self, filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in self.ALLOWED_EXTENSIONS
