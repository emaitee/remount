// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'

/*::
import type { ElementSpec } from './types'
*/

export function mount (
  elSpec /*: ElementSpec */,
  mountPoint /*: Element */,
  props /*: {} */
) {
  return update(elSpec, mountPoint, props)
}

/**
 * Updates a custom element by calling `ReactDOM.render()`.
 * @private
 */

export function update (
  { component, attributes } /*: ElementSpec */,
  mountPoint /*: Element */,
  props /*: {} */
) {
  const reactElement = React.createElement(component, props)
  ReactDOM.render(reactElement, mountPoint)
}

/**
 * Unmounts a component.
 * @private
 */

export function unmount (_ /*: ElementSpec */, mountPoint /*: Element */) {
  ReactDOM.unmountComponentAtNode(mountPoint)
}
