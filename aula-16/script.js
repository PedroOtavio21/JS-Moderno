/** Tipos de export em ESModules no JavaScript */
import {inline} from './inline.js'
import defaultInline from './inline.js'
import { group } from './non-inline.js'
import exportDefault from './non-inline.js'
// Pode ser tbm "import exportDefault, {group} from './non-inline.js'"

inline()
defaultInline()
group()
exportDefault()