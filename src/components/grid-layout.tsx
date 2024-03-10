import { Col, Row } from "react-bootstrap";

interface Props {
    items: any[];
}

export default function GridLayout({ items }: Props) {
    return <>
        <Row md={2}>
            {items.map(item => (
                <Col >{`${item.title}: ${item.text}`}</Col>
            ))}
        </Row>
    </>
}