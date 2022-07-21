import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-professional-dashboard',
  templateUrl: './professional-dashboard.component.html',
  styleUrls: ['./professional-dashboard.component.scss']
})
export class ProfessionalDashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

  initializeDataSource(): void {
    const dataSource = [
      {
        "visitorId": "62cd4fb58fa28b740a02937a",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "A",
          "lastName": "A",
          "phoneNumber": "8113811270",
          "email": "a@a.com",
          "address": {
            "streetOrRoad": "street",
            "landmark": "land",
            "buildingNumber": "build",
            "zipCode": "zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "sxPhqXETCJ",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CANCELED",
        "visitDate": "07/12/2022",
        "visitStartTime": 1657623600000,
        "visitEndTime": 1657625400000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cd692c8fa28b740a029382",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "AKHIL",
          "lastName": "JOSEPH",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "State",
            "landmark": "",
            "buildingNumber": "JKL",
            "zipCode": "JKL",
            "city": "JKL",
            "country": "JM",
            "state": "JKL"
          }
        },
        "tan": "4FLxu5jxIE",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/12/2022",
        "visitStartTime": 1657632600000,
        "visitEndTime": 1657634400000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62ce892336c2d95aeae80dac",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Abraham",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "abrahamjosephpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "NA",
            "landmark": "NA",
            "buildingNumber": "NA",
            "zipCode": "NA",
            "city": "NA",
            "country": "IN",
            "state": "NA"
          }
        },
        "tan": "Po356aY822",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/13/2022",
        "visitStartTime": 1657706400000,
        "visitEndTime": 1657708200000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62ce8a9736c2d95aeae80db2",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Abraham",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "abrahamjosephpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "NA",
            "landmark": "NA",
            "buildingNumber": "NA",
            "zipCode": "NA",
            "city": "NA",
            "country": "IN",
            "state": "NA"
          }
        },
        "tan": "Tj7dZgVDTO",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "ACCEPTED",
        "visitDate": "07/13/2022",
        "visitStartTime": 1657708200000,
        "visitEndTime": 1657710000000,
        "temperature": "87",
        "rejectReason": "",
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cbbc428fa28b740a029361",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "bulding",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "OTgwtHbZ1g",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CONFIRMED",
        "visitDate": "07/11/2022",
        "visitStartTime": 1657521000000,
        "visitEndTime": 1657522800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62c547428fa28b740a02935d",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "s",
            "landmark": "s",
            "buildingNumber": "s",
            "zipCode": "s",
            "city": "s",
            "country": "AD",
            "state": "s"
          }
        },
        "tan": "Z0U9uj9PLo",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/06/2022",
        "visitStartTime": 1657126800000,
        "visitEndTime": 1657128600000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62ce86e236c2d95aeae80daa",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "NA",
            "landmark": "NA",
            "buildingNumber": "NA",
            "zipCode": "NA",
            "city": "NA",
            "country": "IS",
            "state": "NA"
          }
        },
        "tan": "to0zovWAUC",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "ACCEPTED",
        "visitDate": "07/13/2022",
        "visitStartTime": 1657704600000,
        "visitEndTime": 1657706400000,
        "temperature": "22",
        "rejectReason": "",
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cbec608fa28b740a029367",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building",
            "zipCode": "ZIp",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "LF6i8akfLj",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/11/2022",
        "visitStartTime": 1657530000000,
        "visitEndTime": 1657531800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cd72fa8fa28b740a029384",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "akSrywIZx7",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/12/2022",
        "visitStartTime": 1657634400000,
        "visitEndTime": 1657636200000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62d78e231cf4564272cc5159",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street/Road",
            "landmark": "Landmark",
            "buildingNumber": "Apt/Building No.",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "eX8XIs5eOM",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "ACCEPTED",
        "visitDate": "07/20/2022",
        "visitStartTime": 1658212200000,
        "visitEndTime": 1658215800000,
        "temperature": "65",
        "rejectReason": "",
        "location": "Krankenhausstraße 12, 93149 Nittenau"
      },
      {
        "visitorId": "62d53a0f1cf4564272cc514c",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street/Road",
            "landmark": "Landmark",
            "buildingNumber": "Apt/Building No.",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "xhHakI5B2J",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/18/2022",
        "visitStartTime": 1658142000000,
        "visitEndTime": 1658143800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cd68bd8fa28b740a029380",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building",
            "zipCode": "ZIP",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "SbxRg8kTZx",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/12/2022",
        "visitStartTime": 1657630800000,
        "visitEndTime": 1657632600000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62c5356d8fa28b740a02935b",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "State",
            "landmark": "Address",
            "buildingNumber": "Hause",
            "zipCode": "PIN",
            "city": "Sta",
            "country": "IN",
            "state": "Bund"
          }
        },
        "tan": "UghF1Z8JM4",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/06/2022",
        "visitStartTime": 1657126800000,
        "visitEndTime": 1657128600000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62ce80f336c2d95aeae80da1",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building No",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "SRjQHa76ZC",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CONFIRMED",
        "visitDate": "07/13/2022",
        "visitStartTime": 1657701000000,
        "visitEndTime": 1657702800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cc0b418fa28b740a02936f",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building no",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "X9vVljTdao",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/11/2022",
        "visitStartTime": 1657540800000,
        "visitEndTime": 1657542600000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cbc17b8fa28b740a029363",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Buiding",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "zISE2ws6V1",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/11/2022",
        "visitStartTime": 1657522800000,
        "visitEndTime": 1657524600000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62ce837136c2d95aeae80da8",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "NA",
            "landmark": "Na",
            "buildingNumber": "NA",
            "zipCode": "NA",
            "city": "Na",
            "country": "IN",
            "state": "Na"
          }
        },
        "tan": "6urogiVZ3x",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/13/2022",
        "visitStartTime": 1657702800000,
        "visitEndTime": 1657704600000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cbedb58fa28b740a029369",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "dTTkH9SzGL",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/11/2022",
        "visitStartTime": 1657533600000,
        "visitEndTime": 1657535400000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62d3f5e51cf4564272cc5148",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "NA",
            "landmark": "",
            "buildingNumber": "NA",
            "zipCode": "NA",
            "city": "NA",
            "country": "IN",
            "state": "NA"
          }
        },
        "tan": "MoPR91h6Tr",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/17/2022",
        "visitStartTime": 1658061000000,
        "visitEndTime": 1658062800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cc1d478fa28b740a029375",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "8SnvP9J73w",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/11/2022",
        "visitStartTime": 1657544400000,
        "visitEndTime": 1657546200000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62c689068fa28b740a02935f",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "NA",
            "landmark": "NA",
            "buildingNumber": "NA",
            "zipCode": "NA",
            "city": "NA",
            "country": "DZ",
            "state": "NA"
          }
        },
        "tan": "dmFP4qZBq6",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/07/2022",
        "visitStartTime": 1657184400000,
        "visitEndTime": 1657186200000,
        "location": "Krankenhausstraße 12, 93149 Nittenau"
      },
      {
        "visitorId": "62cc0bd18fa28b740a029371",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "Kerala"
          }
        },
        "tan": "1RfKwfKnpL",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/11/2022",
        "visitStartTime": 1657542600000,
        "visitEndTime": 1657544400000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62ce7ecc36c2d95aeae80d9f",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": " Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "QCetLfIqdU",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/13/2022",
        "visitStartTime": 1657699200000,
        "visitEndTime": 1657701000000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62d51f941cf4564272cc514a",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street/Road",
            "landmark": "Landmark",
            "buildingNumber": "Apt/Building No.",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "Nc5BhQtWMj",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/18/2022",
        "visitStartTime": 1658136600000,
        "visitEndTime": 1658138400000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cd2e5e8fa28b740a029378",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "State",
            "landmark": "Address",
            "buildingNumber": "15236",
            "zipCode": "1542",
            "city": "5151561",
            "country": "1213132",
            "state": "556465"
          }
        },
        "tan": "bXEmVdcFmk",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/12/2022",
        "visitStartTime": 1657614600000,
        "visitEndTime": 1657616400000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62aff1727d81203602842948",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "ajpulluvelil@gmail.com",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Kerala",
            "landmark": "",
            "buildingNumber": "PSD1256",
            "zipCode": "9856FF857DV",
            "city": "KERALA",
            "country": "IN",
            "state": "WERTIL"
          }
        },
        "tan": "46mHhSvIi9",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "06/20/2022",
        "visitStartTime": 1655703000000,
        "visitEndTime": 1655704800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cd675b8fa28b740a02937c",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street ",
            "landmark": "Landmark",
            "buildingNumber": "building",
            "zipCode": "Zip",
            "city": "City",
            "country": "IN",
            "state": "State"
          }
        },
        "tan": "jFmavo1pbB",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/12/2022",
        "visitStartTime": 1657627200000,
        "visitEndTime": 1657629000000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cd68328fa28b740a02937e",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "State",
            "landmark": "Address",
            "buildingNumber": "JKL",
            "zipCode": "JKL",
            "city": "JKL",
            "country": "JM",
            "state": "JKL"
          }
        },
        "tan": "a6xV5jaUzI",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "07/12/2022",
        "visitStartTime": 1657629000000,
        "visitEndTime": 1657630800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62ce6ea936c2d95aeae80d9d",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Akhil ",
          "lastName": "Joseph",
          "phoneNumber": "8113811270",
          "email": "ajpulluvelil@gmail.com",
          "address": {
            "streetOrRoad": "Street",
            "landmark": "Landmark",
            "buildingNumber": "Building",
            "zipCode": "Zip",
            "city": "City",
            "country": "AS",
            "state": "State"
          }
        },
        "tan": "AE2Ne6uqsb",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CONFIRMED",
        "visitDate": "07/13/2022",
        "visitStartTime": 1657697400000,
        "visitEndTime": 1657699200000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "624c33e08e6e9532d7b123f3",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Elmar",
          "lastName": "Pürkenauer ",
          "phoneNumber": "01722716119",
          "email": "elmar@notenversand.net",
          "address": {
            "streetOrRoad": "Dorfstraße ",
            "landmark": "",
            "buildingNumber": "17",
            "zipCode": "54363",
            "city": "Dosamma",
            "country": "DE",
            "state": "Bayern"
          }
        },
        "tan": "ou374Mykfa",
        "roomNumber": "111",
        "patientName": "Sonja Vögerl",
        "appointmentStatus": "CREATED",
        "visitDate": "04/05/2022",
        "visitStartTime": 1649079000000,
        "visitEndTime": 1649080800000,
        "location": "Krankenhausstraße, 93149, Nittenau, "
      },
      {
        "visitorId": "624ae57c8e6e9532d7b123ec",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Elmar",
          "lastName": "Pürkenauer",
          "phoneNumber": "094452015461",
          "email": "elmar.puerkenauer@passauerwolf.de",
          "address": {
            "streetOrRoad": "Dorfstr",
            "landmark": "",
            "buildingNumber": "17",
            "zipCode": "12345",
            "city": "Dosama",
            "country": "DE",
            "state": "Bayern"
          }
        },
        "tan": "vmUU8DkAB6",
        "roomNumber": "111",
        "patientName": "Sonja Vögerl",
        "appointmentStatus": "ACCEPTED",
        "visitDate": "04/05/2022",
        "visitStartTime": 1649062800000,
        "visitEndTime": 1649064600000,
        "temperature": "37.1",
        "rejectReason": "",
        "location": "Krankenhausstraße, 93149, Nittenau, "
      },
      {
        "visitorId": "624bf6308e6e9532d7b123f1",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Elmar",
          "lastName": "Pürkenauer",
          "phoneNumber": "12345",
          "email": "elmar.puerkenauer@passauerwolf.de",
          "address": {
            "streetOrRoad": "Dorfstraße",
            "landmark": "",
            "buildingNumber": "17",
            "zipCode": "12345",
            "city": "Dosama",
            "country": "DE",
            "state": "Bayern"
          }
        },
        "tan": "k4hd66o0Lt",
        "roomNumber": "113",
        "patientName": "Erika Deml",
        "appointmentStatus": "CREATED",
        "visitDate": "04/05/2022",
        "visitStartTime": 1649061000000,
        "visitEndTime": 1649062800000,
        "location": "Krankenhausstraße, 93149, Nittenau, "
      },
      {
        "visitorId": "62cc03d88fa28b740a02936b",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Health",
          "lastName": "Status",
          "phoneNumber": "9854746301",
          "email": "test-healthstatus@mailinator.com",
          "address": {
            "streetOrRoad": "test",
            "landmark": "",
            "buildingNumber": "Test",
            "zipCode": "154247",
            "city": "ss",
            "country": "DE",
            "state": "ss"
          }
        },
        "tan": "o3lQ76LFpp",
        "roomNumber": " ",
        "patientName": "Helth-mail Test",
        "appointmentStatus": "CREATED",
        "visitDate": "07/11/2022",
        "visitStartTime": 1657539000000,
        "visitEndTime": 1657540800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62cc08ac8fa28b740a02936d",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Jithin",
          "lastName": "Gregory",
          "phoneNumber": "9845754281",
          "email": "gregoryjithin@gmail.com",
          "address": {
            "streetOrRoad": "Test",
            "landmark": "test",
            "buildingNumber": "Test",
            "zipCode": "754869",
            "city": "PBVR",
            "country": "IN",
            "state": "kerala"
          }
        },
        "tan": "9p9gbivEAZ",
        "roomNumber": " ",
        "patientName": "jithin gregory",
        "appointmentStatus": "CREATED",
        "visitDate": "07/12/2022",
        "visitStartTime": 1657544400000,
        "visitEndTime": 1657546200000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "624c51f38e6e9532d7b123f8",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Maria",
          "lastName": "m.Doc",
          "phoneNumber": "0123/123456",
          "email": "maria.maliarevitch@mdoc.one",
          "address": {
            "streetOrRoad": "Ursulaplatz",
            "landmark": "",
            "buildingNumber": "1",
            "zipCode": "50668",
            "city": "Köln",
            "country": "Deutschland",
            "state": "NRW"
          }
        },
        "tan": "ycqymeDvoW",
        "roomNumber": "111",
        "patientName": "Sonja Vögerl",
        "appointmentStatus": "CREATED",
        "visitDate": "04/05/2022",
        "visitStartTime": 1649082600000,
        "visitEndTime": 1649084400000,
        "location": "Krankenhausstraße, 93149, Nittenau, "
      },
      {
        "visitorId": "627b719b7d81203602842942",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Melanei",
          "lastName": "Wels",
          "phoneNumber": "000",
          "email": "melanie.wels@passauerwolf.de",
          "address": {
            "streetOrRoad": "Krumenauerstrasse",
            "landmark": "",
            "buildingNumber": "38",
            "zipCode": "85049",
            "city": "Ingolstadt",
            "country": "DE",
            "state": "bayern"
          }
        },
        "tan": "TPFjDAmbmX",
        "roomNumber": "111",
        "patientName": "Sonja Vögerl",
        "appointmentStatus": "CREATED",
        "visitDate": "05/11/2022",
        "visitStartTime": 1652171400000,
        "visitEndTime": 1652173200000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "627cc8747d81203602842946",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Melanie",
          "lastName": "Wels",
          "phoneNumber": "0841886563803",
          "email": "melanie.wels@passauerwolf.de",
          "address": {
            "streetOrRoad": "Krumenauerstrasse 38",
            "landmark": "",
            "buildingNumber": "38",
            "zipCode": "85049",
            "city": "Ingolstadt",
            "country": "DE",
            "state": "b"
          }
        },
        "tan": "KeECYRMOsD",
        "roomNumber": "111",
        "patientName": "Sonja Vögerl",
        "appointmentStatus": "CREATED",
        "visitDate": "05/12/2022",
        "visitStartTime": 1652173200000,
        "visitEndTime": 1652175000000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "624c40968e6e9532d7b123f6",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Melanie",
          "lastName": "Wels",
          "phoneNumber": "0841886563803",
          "email": "melanie.wels@passauerwolf.de",
          "address": {
            "streetOrRoad": "Krumenauerstrasse",
            "landmark": "",
            "buildingNumber": "38",
            "zipCode": "85049",
            "city": "Ingolstadt",
            "country": "DE",
            "state": "Bayern"
          }
        },
        "tan": "V94ttqzU9g",
        "roomNumber": "113",
        "patientName": "Erika Deml",
        "appointmentStatus": "CONFIRMED",
        "visitDate": "04/08/2022",
        "visitStartTime": 1649149200000,
        "visitEndTime": 1649152800000,
        "location": "Krankenhausstraße 12, 93149 Nittenau, "
      },
      {
        "visitorId": "62b324e17d8120360284294c",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Test",
          "lastName": "Visitor",
          "phoneNumber": "54546546",
          "email": "mohammed.shabeeb@trenser.com",
          "address": {
            "streetOrRoad": "NA",
            "landmark": "NA",
            "buildingNumber": "7896",
            "zipCode": "1234",
            "city": "NA",
            "country": "EG",
            "state": "NA"
          }
        },
        "tan": "kzIqpNISXn",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "REJECTED",
        "visitDate": "06/23/2022",
        "visitStartTime": 1655703000000,
        "visitEndTime": 1655704800000,
        "temperature": "35",
        "rejectReason": "test",
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      },
      {
        "visitorId": "62b326c17d8120360284294e",
        "clinicId": "06",
        "department": "Stationäre Pflege",
        "visitorDetails": {
          "firstName": "Test",
          "lastName": "Two",
          "phoneNumber": "89899889",
          "email": "mohammed.shabeeb@trenser.com",
          "address": {
            "streetOrRoad": "NA",
            "landmark": "NA",
            "buildingNumber": "102",
            "zipCode": "212122",
            "city": "NA",
            "country": "NA",
            "state": "NA"
          }
        },
        "tan": "aosSJ6w19R",
        "roomNumber": " ",
        "patientName": "Akhil Mohan",
        "appointmentStatus": "CREATED",
        "visitDate": "06/23/2022",
        "visitStartTime": 1655703000000,
        "visitEndTime": 1655704800000,
        "location": "Krankenhausstraße 12, 93149, Nittenau"
      }
    ]
  }
}
