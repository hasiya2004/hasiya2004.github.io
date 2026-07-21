declare module "dotted-map" {
  export interface DottedMapOptions {
    height?: number;
    width?: number;
    grid?: "diagonal" | "vertical" | "horizontal";
  }

  export interface GetSVGOptions {
    radius?: number;
    color?: string;
    shape?: "circle" | "hexagon";
    backgroundColor?: string;
  }

  export default class DottedMap {
    constructor(options?: DottedMapOptions);
    getSVG(options?: GetSVGOptions): string;
    addPin(options: { lat: number; lng: number; data?: any }): void;
  }
}
