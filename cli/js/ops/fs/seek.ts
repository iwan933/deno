// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import { sendSync, sendAsync } from "../dispatch_json.ts";
import { SeekMode } from "../../io.ts";

export function seekSync(
  rid: number,
  offset: number,
  whence: SeekMode
): number {
  return sendSync("op_seek", { rid, offset, whence });
}

export async function seek(
  rid: number,
  offset: number,
  whence: SeekMode
): Promise<number> {
  return await sendAsync("op_seek", { rid, offset, whence });
}
