import React, { Component } from 'react';
import { TextInputGroup } from '../../../common/components/Input';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { LABELS } from '../../../common/constants/stringConstants';
import { EcomPureComponent } from '../../../common/components/EcomPureComponent';
import { withList } from '../../../common/components/HOC/withList';
import { DummyReviewCard } from '../ProductCard/DummyProductCard';

export class AddReviewForm extends Component {
    render() {
        const { handleChange, handleSubmit, rating, name, review, handleRate } = this.props
        return (
            <Form onSubmit={handleSubmit} >
                <div className="title"> Add a review </div>
                <TextInputGroup handleChange={handleChange} label="Choose a nickname" name="name" />
                <TextInputGroup handleChange={handleChange} label="Your Review" name="review" as="textarea" row={3} />
                <Form.Group as={Row} >
                    <Form.Label column sm={4}> {"Overall Review"} </Form.Label>
                    <Col sm="6" className="review-star">
                        <StarRate handleRate={handleRate} rating={rating} />
                    </Col>
                </Form.Group>
                <div className="submit-container row">
                    <Col md={{ span: 1, offset: 4 }} >
                        <Button variant="none" onClick={handleSubmit} className="submit-button" >
                            {LABELS.BUTTON.SUBMIT}
                        </Button>
                    </Col>
                </div>
            </Form>
        );
    }
}

export const StarRate = (props) => {
    const { rating, handleRate } = props
    return (
        <React.Fragment>
            {
                [1, 2, 3, 4, 5].map(item => {
                    const className = rating >= item ? 'fas fa-star' : 'far fa-star';
                    return <i onClick={() => handleRate(item)} className={className} />
                })
            }
        </React.Fragment>
    )
}

export class ReviewCard extends EcomPureComponent {
    render() {
        const { created_on, name, rating, review } = this.props.item
        return (
            <Row>
                <Col md={{ span: 4 }} >
                    <div className="review-star">
                        <StarRate rating={rating} />
                    </div>
                    <div className="user-name"> {name} </div>
                    <div className="other-text">{created_on}</div>
                </Col>
                <Col md={{ span: 8 }} >
                    <div className="other-text"> {review}</div>
                </Col>
            </Row>
        )
    }
}

export const ReviewList = withList(ReviewCard)