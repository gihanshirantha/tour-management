
import { Outlet } from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
import LeftNavigation from '../Admin Components/LeftNavigation/LeftNavigation'
import AdminHeader from '../Admin Components/AdminHeader/AdminHeader'


const AdminApp = () => {
  return (
    <Container fluid className='vh-100'>
        <Row >
          <Col lg='3'>
          <LeftNavigation/>
          </Col>
            
            <Col lg='9'>
                <AdminHeader/>
                <Outlet/>
            </Col>
        </Row>
    </Container>
  )
}

export default AdminApp