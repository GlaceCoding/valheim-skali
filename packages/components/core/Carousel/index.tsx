import { chakra, HStack } from '@chakra-ui/react';
import ZoomableImage from '../ZoomableImage';

interface ImageType {
  src: string;
  alt: string;
}

export interface CarouselProps {
  images: ImageType[];
  carouselHeight: string;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, carouselHeight, className }) => (
  <HStack spacing="4" mb="5" py="4" overflow="auto" className={className}>
    {images.map(imageAttributes => (
      <ZoomableImage
        key={imageAttributes.src}
        imageAttributes={imageAttributes}
        maxH={carouselHeight}
        cursor="pointer"
      />
    ))}
  </HStack>
);
export default chakra(Carousel);