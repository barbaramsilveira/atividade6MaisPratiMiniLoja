const Button = ({ children, variant = 'solid', disabled }) => {
  const base = "px-4 py-2 rounded transition transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";
  const variants = {
    solid: "bg-accent text-white hover:brightness-110",
    outline: "border border-accent text-accent hover:bg-accent hover:text-white",
    ghost: "text-accent hover:bg-accent/20",
  };

  return (
    <button className={`${base} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button;
