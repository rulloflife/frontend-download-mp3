import { CanDeactivateFn } from '@angular/router';
import { DeactiveComponent } from '../types/deactive-component';

export const canDeactivateGuard: CanDeactivateFn<DeactiveComponent> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate ? component.canDeactivate() : true;;
};
