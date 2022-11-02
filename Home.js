import {
  Card, CardHeader, CardBody, CardTitle, CardText, CardLink} from "reactstrap"
import './Home.css'
import  Collab from './collabanimation'
import  Trans from './transcationanimation'
import Awards from "./Awards"
const Home = () => {
  return (
    <div>
      <Card className="card1">
        <CardHeader>
          <CardTitle>Hamesha Aapke Saath</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Listening to the Financial Needs of Business and Simplifying Payroll Funding for Digital India</CardText>
          <CardText>
          1 CLICK To{" "}
            <CardLink
              href="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation/"
              target="_blank"
            >
              Template Documentation
            </CardLink>{" "}
           
          </CardText>
        </CardBody>
      </Card>

      
       <Card  className="card2">
       <CardTitle>Products</CardTitle>
      </Card>
      <Card className="card3">
      <CardTitle>Features</CardTitle>
      </Card>
      <Card className="card4">
      <CardTitle>about</CardTitle>
      </Card>
      <Card className="card5">
      <CardTitle>awards</CardTitle>
      <Awards/>
      </Card>
      <Card className="card6">
      <CardTitle>collaborates</CardTitle>
      <CardBody>
           <Collab/>    

      </CardBody>
      </Card>

      <Card className="card7">
      <CardTitle>client</CardTitle>
      <Trans/>
     </Card>
      <Card className="card8">
      <CardTitle>Footer</CardTitle>
      </Card>
    </div>
   
  )
}

export default Home
