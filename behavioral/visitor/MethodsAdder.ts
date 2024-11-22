import { ICarWithExport } from './types';
import BMW from './BMW';
import Audi from './Audi';
import Tesla from './Tesla';

const exportVisitor = {
  addExportDataMethod(auto: ICarWithExport): string {
    const exportMethodTemplate = {
      export() {
        return `Exported data: ${auto.info()}`;
      },
    };

    if (auto instanceof BMW) {
      Object.assign(auto, exportMethodTemplate);

      return auto.export?.() ?? `There's no "export" method!`;
    }

    if (auto instanceof Audi) {
      Object.assign(auto, exportMethodTemplate);
      return auto.export?.() ?? `There's no "export" method!`;
    }

    if (auto instanceof Tesla) {
      Object.assign(auto, exportMethodTemplate);
      return auto.export?.() ?? `There's no "export" method!`;
    }

    return `auto: ${auto} has an unkwnown generating class`;
  },
};

export default exportVisitor;
