HOSPITAL API ##MERNSTACK
-----------------------------------------------------------------------------------------

FUNCTIONS:
1. Doctor Register
2. Doctor Login
3. Patient Register
4. Create Patient Report
5. Get Patients Report
6. Get All Reports by Status
-------------------------------------------------------------------------------------------------

ENDPOINTS:

1. `doctor/register` - Post method, takes name and password arguments, returns a success message.
2. `doctor/login` - Post method, takes in name and password, returns a JWT token and sets token in the cookie.
3. `patient/register` - Post method, takes in phone number of the patient, returns a success message if its new patient.
4. `patient/:id/create_report`- Post method, takes in doctor name, status and date, returns the report created in JSON format.
5. `patient/:id/all_reports` - Get methods, id of the patient is passed as URL parameter, returns all the reports of that patient.
6. `report/:status` - Get method, status is passed as URL parameter, returns all patients reports with the specified status.

-----------------------------------------------------------------------------------------------------

RUNNING THE API SERVER:

1. `git clone https://github.com/zepher-23/skilltest3.git`
2. `cd skilltest3` (or whatever the folder name is.)
3. `npm install`
4. `npm start`

-----------------------------------------------------------------------------------------------------------


