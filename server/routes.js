import express from 'express'
import { getQuestions, addQuestion } from './routes/Questions.js'
import { addMobOfficer } from './routes/MobOfficers.js'
import { getUserByPhone, updateUserInfo, insertUser, deleteUser } from './routes/Users.js'
import { addCustomer } from './routes/Customers.js'
import { submitTest } from './routes/SubmitTest.js'
import { getUsersAssignedClasses } from './routes/Classes.js'
import { getCompanies, getCompanyByName, insertCompany } from './routes/Company.js';
import { getPorts } from './routes/Ports.js';
import { getVessels } from './routes/Vessels.js';
import { getDashboardUsers } from './routes/Dashboard.js';
import { getAllUserData } from './routes/AllUserOverview.js'

const router = express.Router()

router.route('/questions')
  .get(getQuestions)
  .post(addQuestion)

router.route('/mobOfficers')
  .post(addMobOfficer)

router.route('/companies')
  .get(getCompanies)

router.route('/company')
  .get(getCompanyByName)
  .post(insertCompany)
  
router.route('/ports')
  .get(getPorts)

router.route('/vessels')
  .get(getVessels)

router.route('/users')
  .get(getUserByPhone)
  .put(updateUserInfo)
  .post(insertUser)
  .delete(deleteUser)

router.route('/customers')
  .get(addCustomer)

router.route('/submit-test')
  .post(submitTest)

router.route('/classes')
  .get(getUsersAssignedClasses)

router.route('/dashboard')
  .get(getDashboardUsers)

router.route('/all-user-overview')
  .get(getAllUserData)

export default router