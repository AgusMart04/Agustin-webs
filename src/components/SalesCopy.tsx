interface SalesCopyProps {
  text: string;
  dark?: boolean;
}

const SalesCopy = ({ text, dark = false }: SalesCopyProps) => (
  <div className={`py-12 md:py-16 ${dark ? 'gradient-dark' : ''} relative overflow-hidden`}>
    <div className="container relative z-10">
      <p className={`text-center text-xl md:text-2xl font-bold max-w-3xl mx-auto ${dark ? 'text-primary-foreground' : 'text-foreground'}`}>
        {text}
      </p>
    </div>
  </div>
);

export default SalesCopy;
