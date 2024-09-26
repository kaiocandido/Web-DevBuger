import React from 'react';
import { Container } from './styles';

const MapEmbed = () => {
    return (
        <Container>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56120.62562996686!2d-81.52927365136718!3d28.463307000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77fe8372b76a1%3A0x10a6d21cb722828c!2sMr%20Burdog%20-%20Lanche%20Brasileiro%2C%20cachorro-quente%20e%20Burger%20-%20Orlando!5e0!3m2!1spt-BR!2sbr!4v1727367078641!5m2!1spt-BR!2sbr"
                width="100%"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy">
            </iframe>
        </Container>
    );
};

export default MapEmbed;