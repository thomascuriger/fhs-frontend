import { AbstractControl, FormGroup } from '@angular/forms';
import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive()
export abstract class AbstractFormControlComponent<T> implements OnChanges {

  /**
   * Form in to which this field is added. Default a new FormGroup is created.
   */
  @Input() form: FormGroup = new FormGroup({});

  /**
   * Form control value input.
   */
  @Input() value?: T;

  /**
   * Label of the input field. Used as a placeholder when the field is empty and not focused.
   */
  @Input() label = '';

  /**
   * Name of the input field. Used for the id and name attribute.
   */
  @Input() fieldName!: string;

  /**
   * Set to true if field is required.
   */
  @Input() required = false;

  @Input() disabled = false;

  /**
   * Form control value output.
   */
  @Output() valueChange: EventEmitter<T>;

  /**
  * Enter key pressed event.
  */
  @Output() enter: EventEmitter<any>;

  constructor() {
    this.enter = new EventEmitter<any>();
    this.valueChange = new EventEmitter<T>();
  }

  protected addControl(control: AbstractControl) {
    if(!this.fieldName) return;
    this.addNamedControl(this.fieldName, control);
  }

  protected addNamedControl(name: string, control: AbstractControl) {
    this.form.addControl(name, control);
  }

  protected removeControl() {
    if(!this.fieldName) return;
    this.removeNamedControl(this.fieldName);
  }

  protected removeNamedControl(name: string) {
    this.form.removeControl(name);
  }

  /**
   * Emit internal value changes
   */
  protected createValueChangeEmitter() {
    this.field!.valueChanges.subscribe((changedValue) => {
      this.valueChange.emit(changedValue);
    })
  }

  enterPress() {
    this.enter.emit();
  }

  get field() {
    if(!this.fieldName) return;
    return this.form.get(this.fieldName);
  }

  /**
   * Receive external value changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.value && !changes.value.firstChange) {
      this.field!.setValue(changes.value.currentValue);
    }
  }

}
