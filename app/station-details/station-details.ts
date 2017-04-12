export interface StationDetails {
	 "marketId": number,
    "programId": number,
    "seriesName": string,
    "episodeName": string,
	"demographics":[{
          "demographicId": number,
          "sh": number,
          "pt": number,
          "rt": number,
          "aa": number
        }]
}