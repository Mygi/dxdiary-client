export class Dialyser {
    public brand = "Baxter";
    public model = "170h"
    public surfaceArea = 1.7;
}
export class Medication {
    public drugName = "";
    public drugChemicalName = "";
    public administration = "intravenous";
    public linkedInformationUrl = ""; 
}
export class DoseFrequency {
    public label = "";
    public frequency: "singleUse" | "hourly" | "daily" | "weekly" | "monthly" | "fortnightly" = "hourly";
    public calculatedHourlyRate = 0.0;
}
export class Dose {
    unitOfMeasure = "mg";
    units = 1000;
    frequency = new DoseFrequency();
    medication = new Medication();
}
export class QuantityRatio {
    soluteUnitOfMeasure = "mmol";
    solventUnitOfMeasure = "Litre"
    soluteAmount = 1.1;
    solventAmount = 1;
} 
export class FlowRate {
    fluidUnitOfMeasure = "ml";
    timeUnitOfMeasure = "minute"
    flow = 250;
    time = 1;
} 
export class Dialysate {
    public kPlusConcentration = new QuantityRatio();
    public NaTotalConcentration = new QuantityRatio();
    public calciumConcentration =  new QuantityRatio();
    public bicarbonateConcentration = new QuantityRatio();
}
export class Anticoagulant {
    public initialAnticoagulant = new Dose();
    public anticoagulantStopTimeMinutes = 30;
    public ongoingAnticoagulant = new Dose(); 
}
export class MaintenanceRegime {
    public decalcifyingClean = new DoseFrequency();
    public carbonFilterReplacement = new DoseFrequency();
    public smallFilterReplacement = new DoseFrequency();
    public dialysateFilterReplacement = new DoseFrequency();
    public chlorineTestSchedule = new DoseFrequency();
    public electricalTestSchedule = new DoseFrequency();
    public majorServiceSchedule = new DoseFrequency();
    public minorServiceSchedule = new DoseFrequency();
    public endotoxinTestSchedule = new DoseFrequency();
    public microbeTestSchedule = new DoseFrequency();
    public waterTestSchedule = new DoseFrequency();
}
export class DialysisRegime {
        public userId = "";
        public regimeId = 0;
        public isDefault = true;
        public regimeName = "";
        public durationHours = 8;
        public modality = "Haemodialysis";
        public qb = new FlowRate();
        public qf = new FlowRate();
        public temperature = 36.5;
        public dialysate = new Dialysate();
        public dialyser = new Dialyser();
        public anticoagulant = new Anticoagulant();        
        public sessionsPerWeek = new FlowRate();
}