import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import './footerDark.scss';


const HomePageFooter = [
    {
        title: 'Question ?', content: [
            { title: 'Order', link: '1' },
            { title: 'Returns', link: '2' },
            { title: 'Track Order', link: '3' },
            { title: 'Refund', link: '4' },
        ]
    },
    {
        title: 'What`s in store ?', content: [
            { title: 'Women', link: '5' },
            { title: 'Men', link: '6' },
            { title: 'Kids', link: '7' },
            { title: 'Brands', link: '8' },
        ]
    },
    {
        title: 'Follow ?', content: [
            { title: 'Facebook', link: '9' },
            { title: 'Instagram', link: '10' },
            { title: 'Twitter', link: '11' },
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
            <footer className='footer-dark'>
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