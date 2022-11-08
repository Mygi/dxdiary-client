

export class DialysisSession {
    public userId = '';
    public regimeId = 0;
    public date = Date.now().toLocaleString();
    public start_time = "21:00";
    public end_time = "05:00";
    public duration_hours = 8;
    public qb = 250;
    public qf = 300;
    public temp = 36.7;
    public venous_pressure = 85;
    public arterial_pressure = 98;
    public avg_tmp = 3;
    public uf_litres = 2.2;
    public accumulated_blood_volume_ltr = 117;
    public notes = "";
    public dateValue: Date = new Date(Date.now())
}