import React from 'react';
import { View, Text, Image } from 'react-native';

interface BookHorizonProps {
    imageUrl: string;
    title: string;
}

const BookHorizon: React.FC<BookHorizonProps> = ({ imageUrl, title }) => {
    return (
        <View>
            <Image src={imageUrl} alt={title} />
            <Text>{title}</Text>
        </View>
    );
};

export default BookHorizon;