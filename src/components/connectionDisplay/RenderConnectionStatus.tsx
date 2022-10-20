import { Colors } from "../../constants";
import ConnectionDisplayCircleItem from "./ConnectionDisplayCircleItem";

interface RenderConnectionStatusProps {
  color: string;
  connectionStatus: ConnectionStatus;
}

const RenderConnectionStatus = ({
  color,
  connectionStatus,
}: RenderConnectionStatusProps) => {
  return (
    <>
      <ConnectionDisplayCircleItem offset={0} />
      <ConnectionDisplayCircleItem offset={40} />
      <ConnectionDisplayCircleItem color={color} offset={100} />
      <ConnectionDisplayCircleItem offset={140} />
      <ConnectionDisplayCircleItem color={color} offset={180} />
      <ConnectionDisplayCircleItem
        color={
          connectionStatus === "Connected"
            ? Colors.GREEN
            : Colors.PRIMARY_SHADOW_COLOR
        }
        offset={220}
      />
    </>
  );
};

export default RenderConnectionStatus;
