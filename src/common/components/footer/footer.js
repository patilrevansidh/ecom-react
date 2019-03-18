import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import './footer.scss';


const HomePageFooter = [
    {
        title: 'QUESTIONS ?', content: [
            { title: 'Help', link: '1' },
            { title: 'Track Order', link: '2' },
            { title: 'Return', link: '3' },
        ]
    },
    {
        title: `WHAT'S IN STORE`, content: [
            { title: 'Women', link: '5' },
            { title: 'Men', link: '6' },
            { title: 'A-Z Products', link: '7' },
            { title: 'Buy Gift Vouchers', link: '8' },
        ]
    },
    {
        title: 'FOLLOW US', content: [
            { title: 'Facebook', link: '9' },
            { title: 'Twitter', link: '11' },
            { title: 'YouTube', link: '10' },
        ]
    }
]
export class AppFooter extends Component {

    renderFooterColumn = () => {
        return HomePageFooter.map((item) =>
            <div key={item.title} className="feature-card  px-4 py-3 col-md-4">
                <FooterSection item={item} />
            </div>
        )
    }

    render() {
        return (
            <footer className='footer-light'>
                <Container>
                    <Row>
                        {this.renderFooterColumn()}
                    </Row>
                </Container>
            </footer>
        );
    }
}

const FooterSection = (props) => {
    const { item } = props;
    return (
        <React.Fragment>
            <h2 className="footer-main-menu"> {item.title} </h2>
            {item.content.map((contentElement) => <a key={contentElement.link} > <p className="footer-sub-menu" > {contentElement.title} </p> </a>)}
        </React.Fragment>
    )
}