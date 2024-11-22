import Tesla from './Tesla';
import BMW from './BMW';
import exportVisitor from './MethodsAdder';

const tesla = new Tesla();
const bmw = new BMW();

console.log(tesla.accept(exportVisitor.addExportDataMethod));
// Exported data: It is a Tesla car!
console.log(bmw.accept(exportVisitor.addExportDataMethod));
//  Exported data: It is a BMW car!
