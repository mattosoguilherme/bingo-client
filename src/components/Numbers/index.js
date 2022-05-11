import Ball from "../Ball";
import { GroupNumber, GroupBalls } from "../styles";

const NumberDraw = (props) => {
  const listDraw = props.list;
  const n_draw = props.data;
  return (
    <>
      <GroupNumber>
        <GroupBalls>
          {listDraw.map((n) => (
            <Ball number={n} />
          ))}
        </GroupBalls>

        <div className="big_ball">{n_draw}</div>
      </GroupNumber>
    </>
  );
};

export default NumberDraw;
