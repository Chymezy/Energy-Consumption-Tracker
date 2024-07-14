# from flask import request
# from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from models.energy_record_model import EnergyRecord
# from models.user_model import User
# from models.energy_saving_model import EnergySaving
# from models.energy_benchmark_model import EnergyBenchmark
# from models.city_model import City
# from extensions import db
# from datetime import datetime

# class EnergyRecordAPI(Resource):
#     @jwt_required()
#     def post(self):
#         try:
#             username = get_jwt_identity()
#             user = User.query.filter_by(username=username).first()
#             if not user:
#                 return {'message': 'User not found'}, 400
            
#             data = request.get_json()
#             energy_record = EnergyRecord(
#                 user_id=user.id, 
#                 consumption=data['consumption']
#             )
#             db.session.add(energy_record)
#             db.session.commit()

#             # Check if the user has an associated city
#             if not user.city:
#                 return {'message': 'User city data not found'}, 400

#             # Fetch benchmark and city data for calculations
#             city = City.query.filter_by(name=user.city.name, country=user.country).first()  # Adjusted line
#             benchmark = EnergyBenchmark.query.filter_by(city_id=city.id).first() if city else None  # Adjusted line

#             if not city:
#                 return {'message': 'City data not found'}, 500
#             if not benchmark:
#                 return {'message': 'Benchmark data not found'}, 500

#             # Perform calculations
#             saved_kwh = benchmark.benchmark_value - energy_record.consumption
#             money_saved = saved_kwh * city.cost_of_electricity
#             calculation_date = datetime.now()

#             # Create energy saving record
#             energy_saving = EnergySaving(
#                 user_id=user.id,
#                 energy_record_id=energy_record.id,
#                 saved_kwh=saved_kwh,
#                 money_saved=money_saved,
#                 calculation_date=calculation_date
#             )
#             db.session.add(energy_saving)
#             db.session.commit()

#             return {'message': 'Energy record and savings calculated'}, 201
#         except Exception as e:
#             return {'message': f'Internal server error: {str(e)}'}, 500

#     @jwt_required()
#     def get(self):
#         try:
#             username = get_jwt_identity()
#             user = User.query.filter_by(username=username).first()
#             if not user:
#                 return {'message': 'User not found'}, 400
#             records = EnergyRecord.query.filter_by(user_id=user.id).all()
#             return [record.to_dict() for record in records], 200
#         except Exception as e:
#             return {'message': f'Internal server error: {str(e)}'}, 500

#     @jwt_required()
#     def put(self, record_id):
#         try:
#             username = get_jwt_identity()
#             user = User.query.filter_by(username=username).first()
#             if not user:
#                 return {'message': 'User not found'}, 400
#             data = request.get_json()
#             record = EnergyRecord.query.get_or_404(record_id)
#             if record.user_id != user.id:
#                 return {'message': 'Unauthorized'}, 401
#             record.consumption = data.get('consumption', record.consumption)
#             db.session.commit()
#             return {'message': 'Energy record updated'}, 200
#         except Exception as e:
#             return {'message': f'Internal server error: {str(e)}'}, 500

#     @jwt_required()
#     def delete(self, record_id):
#         try:
#             username = get_jwt_identity()
#             user = User.query.filter_by(username=username).first()
#             if not user:
#                 return {'message': 'User not found'}, 400
#             record = EnergyRecord.query.get_or_404(record_id)
#             if record.user_id != user.id:
#                 return {'message': 'Unauthorized'}, 401
#             db.session.delete(record)
#             db.session.commit()
#             return {'message': 'Energy record deleted'}, 200
#         except Exception as e:
#             return {'message': f'Internal server error: {str(e)}'}, 500


# from flask import request
# from flask_restful import Resource
# from flask_jwt_extended import jwt_required, get_jwt_identity
# from models.energy_record_model import EnergyRecord
# from models.user_model import User
# from extensions import db

# class EnergyRecordAPI(Resource):
#     @jwt_required()
#     def post(self):
#         try:
#             username = get_jwt_identity()
#             user = User.query.filter_by(username=username).first()
#             if not user:
#                 return {'message': 'User not found'}, 400
#             data = request.get_json()
#             energy_record = EnergyRecord(user_id=user.id, consumption=data['consumption'])
#             db.session.add(energy_record)
#             db.session.commit()
#             return {'message': 'Energy record created'}, 201
#         except Exception as e:
#             return {'message': f'Internal server error: {str(e)}'}, 500

#     @jwt_required()
#     def get(self):
#         try:
#             username = get_jwt_identity()
#             user = User.query.filter_by(username=username).first()
#             if not user:
#                 return {'message': 'User not found'}, 400
#             records = EnergyRecord.query.filter_by(user_id=user.id).all()
#             return [record.to_dict() for record in records], 200
#         except Exception as e:
#             return {'message': f'Internal server error: {str(e)}'}, 500

#     @jwt_required()
#     def put(self, record_id):
#         try:
#             username = get_jwt_identity()
#             user = User.query.filter_by(username=username).first()
#             if not user:
#                 return {'message': 'User not found'}, 400
#             data = request.get_json()
#             record = EnergyRecord.query.get_or_404(record_id)
#             if record.user_id != user.id:
#                 return {'message': 'Unauthorized'}, 401
#             record.consumption = data['consumption']
#             db.session.commit()
#             return {'message': 'Energy record updated'}, 200
#         except Exception as e:
#             return {'message': f'Internal server error: {str(e)}'}, 500

#     @jwt_required()
#     def delete(self, record_id):
#         try:
#             username = get_jwt_identity()
#             user = User.query.filter_by(username=username).first()
#             if not user:
#                 return {'message': 'User not found'}, 400
#             record = EnergyRecord.query.get_or_404(record_id)
#             if record.user_id != user.id:
#                 return {'message': 'Unauthorized'}, 401
#             db.session.delete(record)
#             db.session.commit()
#             return {'message': 'Energy record deleted'}, 200
#         except Exception as e:
#             return {'message': f'Internal server error: {str(e)}'}, 500





## requires city data for POST method to work. others methods worked as expected
from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.energy_record_model import EnergyRecord
from models.user_model import User
from extensions import db

class EnergyRecordAPI(Resource):
    @jwt_required()
    def post(self):
        try:
            username = get_jwt_identity()
            user = User.query.filter_by(username=username).first()
            if not user:
                return {'message': 'User not found'}, 400
            
            if not user.city:
                return {'message': 'User city data not found'}, 400

            data = request.get_json()
            energy_record = EnergyRecord(
                user_id=user.id,
                consumption=data['consumption']
            )
            db.session.add(energy_record)
            db.session.commit()

            return {'message': 'Energy record created and savings calculated'}, 201
        except Exception as e:
            return {'message': f'Internal server error: {str(e)}'}, 500

    @jwt_required()
    def get(self):
        try:
            username = get_jwt_identity()
            user = User.query.filter_by(username=username).first()
            if not user:
                return {'message': 'User not found'}, 400
            records = EnergyRecord.query.filter_by(user_id=user.id).all()
            return [record.to_dict() for record in records], 200
        except Exception as e:
            return {'message': f'Internal server error: {str(e)}'}, 500

    @jwt_required()
    def put(self, record_id):
        try:
            username = get_jwt_identity()
            user = User.query.filter_by(username=username).first()
            if not user:
                return {'message': 'User not found'}, 400
            data = request.get_json()
            record = EnergyRecord.query.get_or_404(record_id)
            if record.user_id != user.id:
                return {'message': 'Unauthorized'}, 401
            record.consumption = data.get('consumption', record.consumption)
            db.session.commit()
            return {'message': 'Energy record updated'}, 200
        except Exception as e:
            return {'message': f'Internal server error: {str(e)}'}, 500

    @jwt_required()
    def delete(self, record_id):
        try:
            username = get_jwt_identity()
            user = User.query.filter_by(username=username).first()
            if not user:
                return {'message': 'User not found'}, 400
            record = EnergyRecord.query.get_or_404(record_id)
            if record.user_id != user.id:
                return {'message': 'Unauthorized'}, 401
            db.session.delete(record)
            db.session.commit()
            return {'message': 'Energy record deleted'}, 200
        except Exception as e:
            return {'message': f'Internal server error: {str(e)}'}, 500
