import ColorBox from './ColorBox';

export default function ColorBoxesContainer({ colors }) {
  return (
    <div className="ColorBoxesContainer">
      <div className="RowContainer">
        <ColorBox color={colors[0]} colors={colors} />
        <ColorBox color={colors[1]} colors={colors} />
        <ColorBox color={colors[2]} colors={colors} />
        <ColorBox color={colors[3]} colors={colors} />
        <ColorBox color={colors[4]} colors={colors} />
      </div>

      <div className="RowContainer">
        <ColorBox color={colors[5]} colors={colors} />
        <ColorBox color={colors[6]} colors={colors} />
        <ColorBox color={colors[7]} colors={colors} />
        <ColorBox color={colors[8]} colors={colors} />
        <ColorBox color={colors[9]} colors={colors} />
      </div>

      <div className="RowContainer">
        <ColorBox color={colors[10]} colors={colors} />
        <ColorBox color={colors[11]} colors={colors} />
        <ColorBox color={colors[12]} colors={colors} />
        <ColorBox color={colors[13]} colors={colors} />
        <ColorBox color={colors[14]} colors={colors} />
      </div>

      <div className="RowContainer">
        <ColorBox color={colors[15]} colors={colors} />
        <ColorBox color={colors[16]} colors={colors} />
        <ColorBox color={colors[17]} colors={colors} />
        <ColorBox color={colors[18]} colors={colors} />
        <ColorBox color={colors[19]} colors={colors} />
      </div>

      <div className="RowContainer">
        <ColorBox color={colors[20]} colors={colors} />
        <ColorBox color={colors[21]} colors={colors} />
        <ColorBox color={colors[22]} colors={colors} />
        <ColorBox color={colors[23]} colors={colors} />
        <ColorBox color={colors[24]} colors={colors} />
      </div>
    </div>
  );
}
