export default interface FieldInputProps {
  //TODO: this should be a union of types
  name:
    | 'name'
    | 'preparationTime'
    | 'spiciness'
    | 'numSlices'
    | 'type'
    | 'diameter';
  label: string;
}
