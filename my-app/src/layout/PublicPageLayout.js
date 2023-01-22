import React, { PureComponent } from "react";
import { Container, Row } from "reactstrap";

import Header from "components/Header";
// import MainContainer from "view/User/SignUp/style";

class PublicPageLayout extends PureComponent {
  constructor(props) {
    console.log("props:-", props);
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    console.log("My name is Pranaya");

    return (
      <React.Fragment>
        <div>
          <Container fluid>
               <Header/>
              
             {children}
        
        </Container>
         
         
        </div>
      </React.Fragment>
    );
  }
}

export default PublicPageLayout;