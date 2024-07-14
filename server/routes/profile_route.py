from models.user_model import User
from extensions import db
from flask import request, jsonify, send_file, make_response
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
import io

class ProfilePictureAPI(Resource):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

    @jwt_required()
    def get(self):
        try:
            username = get_jwt_identity()
            user = User.query.filter_by(username=username).first()

            if not user:
                return {'message': 'User not found'}, 404

            if not user.profile_picture:
                return {'message': 'User has no profile picture'}, 404

            response = make_response(user.profile_picture)
            response.headers.set('Content-Type', user.profile_picture_type)
            response.headers.set('Content-Disposition', 'attachment', filename='profile_picture')
            return response

        except Exception as e:
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
                username = get_jwt_identity()
                user = User.query.filter_by(username=username).first()

                if not user:
                    return {'message': 'User not found'}, 404

                user.profile_picture = file.read()
                user.profile_picture_type = file.mimetype
                db.session.commit()

                return {'message': 'File successfully uploaded'}, 201
            else:
                return {'message': 'Allowed file types are png, jpg, jpeg, gif'}, 400

        except Exception as e:
            return {'message': f'Internal server error: {str(e)}'}, 500

    def allowed_file(self, filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in self.ALLOWED_EXTENSIONS
