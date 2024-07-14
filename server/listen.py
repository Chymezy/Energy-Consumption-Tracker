from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import event
from extensions import db
from models.energy_record_model import EnergyRecord
from models.energy_saving_model import EnergySaving
# dynmic calcution place

Session = scoped_session(sessionmaker(bind=db.engine))

@event.listens_for(Session, 'after_flush')
def create_energy_saving(session, flush_context):
    for instance in session.new:
        if isinstance(instance, EnergyRecord):
            energy_saving = EnergySaving.create_from_energy_record(instance)
            session.add(energy_saving)
