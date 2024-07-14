from models.energy_benchmark_model import EnergyBenchmark
from models.energy_record_model import EnergyRecord

def calculate_savings(energy_record):
    benchmark = EnergyBenchmark.query.filter_by(city_id=energy_record.user.city_id).first().benchmark_value
    cost_of_electricity = energy_record.user.city.cost_of_electricity
    energy_saved = benchmark - energy_record.consumption
    money_saved = cost_of_electricity * energy_saved
    return energy_saved, money_saved
