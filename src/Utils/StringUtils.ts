import { v4 as uuidv4 } from "uuid";
export const NewGuid = (type?: string): string => {
    let guid: string = uuidv4();
    switch (type) {
      case "N":
        guid = guid.replace(/-/g, "");
        break;
      case "D":
        guid = guid.replace(/-/g, "");
        break;
      case "B":
        guid = `{${guid}}`;
        break;
      case "P":
        guid = `(${guid})`;
        break;
      default:
        break;
    }
    return guid;
  };