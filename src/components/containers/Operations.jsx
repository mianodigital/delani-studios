import Ops from '../../utils/data.json';
import { Card, Container, Row, Section } from '../styles/container.styled';
import { SubTitle, Text, Title } from '../styles/typography.styled';

function Operations() {
  return (
    <Container>
      <Section>
        <Title>What we do</Title>
      </Section>
      <Row>
        {Ops.operations.map((item, i) => (
          <Card>
            <img
              src={require('../../assets/images/services/' +
                item.image +
                '.png')}
              alt={item.title}
            />
            <SubTitle>{item.title}</SubTitle>
            <Text>{item.description}</Text>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Operations;
