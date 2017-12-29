import { ITdDynamicElementConfig, TdDynamicElement, TdDynamicType } from '@covalent/dynamic-forms';

export class ProjectForm {
  elements: ITdDynamicElementConfig[] = [{
    label: 'string',
    name: 'input',
    type: TdDynamicElement.Input,
    required: true,
  }];
}


// {
//     name: 'textLength',
//     label: 'Text Length',
//     type: TdDynamicElement.Input,
//     minLength: 4,
//     maxLength: 12,
// }

// {
//     name: 'number',
//     type: TdDynamicType.Number,
//     min: 10,
//     max: 80,
// }
  
// {
//     name: 'slider',
//     label: 'Label',
//     type: TdDynamicElement.Slider,
//     required: true,
// }
  
// {
//     name: 'boolean',
//     type: TdDynamicType.Boolean,
//     default: false,
// }
  
// {
//     name: 'select',
//     type: TdDynamicElement.Select,
//     required: true,
//     selections: ['A','B','C'],
//     default: 'A',
// }
  
// {
//     name: 'file-input',
//     label: 'Label',
//     type: TdDynamicElement.FileInput,
// }