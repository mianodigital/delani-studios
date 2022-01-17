import { ContactContainer, FormContainer, InputContainer, Section } from '../styles/container.styled';
import { Button, Input, TextArea } from '../styles/elements.styled';
import { HeroTitle } from '../styles/typography.styled';

function Contact() {
  return (
    <ContactContainer>
      <Section>
        <HeroTitle>Contact</HeroTitle>
        <FormContainer>
          <InputContainer>
            <Input type='text' name='name' placeholder='Name' />
            <Input type='text' name='email' placeholder='Email' />
          </InputContainer>
          <TextArea
            name='message'
            id=''
            cols='30'
            rows='10'
            placeholder='Your Message here'
          />
          <Button>Send Message</Button>
        </FormContainer>
      </Section>
    </ContactContainer>
  );
}

export default Contact;
