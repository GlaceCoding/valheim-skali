import React from 'react';
import { ImageProps as NextImageProps } from 'next/image';
import { Box, chakra, shouldForwardProp, useBoolean } from '@chakra-ui/react';
import ImageModal from '@packages/components/core/ImageModal';
import Image from '@packages/components/core/Image';
import { ElementCategoriesProps } from '@packages/utils/types';
import { createDataAttributes } from '@packages/utils/dataAttributes/createDataAttributes';

export interface ZoomableImageProps extends ElementCategoriesProps {
  src: NextImageProps['src'];
  alt: NextImageProps['alt'];
  width: number;
  height: number;
  objectFit?: NextImageProps['objectFit'];
  objectPosition?: NextImageProps['objectPosition'];
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  width,
  height,
  objectFit,
  objectPosition,
  className,
  elementCategories,
}) => {
  const [isZoomed, setZoomed] = useBoolean();

  return (
    <>
      <Box pos="relative" cursor="pointer" minW={width} minH={height} onClick={setZoomed.on}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit={objectFit}
          objectPosition={objectPosition}
          className={className}
          {...createDataAttributes(elementCategories)}
        />
      </Box>
      {isZoomed && (
        <ImageModal
          src={src}
          alt={alt}
          onClick={setZoomed.off}
          elementCategories={elementCategories.concat('modal')}
        />
      )}
    </>
  );
};

export default chakra(ZoomableImage, {
  shouldForwardProp: prop => {
    if (
      ['width', 'height', 'objectFit', 'objectPosition'].includes(prop) ||
      shouldForwardProp(prop)
    )
      return true;
    else return false;
  },
});
