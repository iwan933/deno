// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
const { args } = Deno;
import { parse } from "./mod.ts";

console.dir(parse(args));
