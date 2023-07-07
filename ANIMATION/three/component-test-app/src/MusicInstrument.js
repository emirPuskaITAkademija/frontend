function MusicInstrument(props) {
  const playSound = () => {
    alert(props.zvuk);
  };

  return <button onClick={playSound}>Play Sound</button>;
}

export default MusicInstrument;
