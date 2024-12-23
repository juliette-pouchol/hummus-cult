const Bulb = props => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
    </mesh>
  )
}

export default Bulb;