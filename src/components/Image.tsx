interface imageProps {
  imageUrl: string;
  alt?: string;
  className?: string;
  aos?: string;
  delay?: string;
}

const Image: React.FC<imageProps> = ({
  imageUrl,
  alt = "image",
  className = "",
  aos,
  delay
}) => {
  return (
    <img
      src={imageUrl}
      alt={alt}
      data-aos={aos}
      data-aos-delay={delay}
      className={`w-[320px] sm:w-[420px] ${className}`}
    />
  );
};

export default Image;