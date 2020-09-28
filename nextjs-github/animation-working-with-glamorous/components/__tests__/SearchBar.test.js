import { shallow, render, mount } from 'enzyme'

import { SearchBar } from '../'
import { StyledWrapper } from '../searchCommons'

describe('SearchBar Component', () => {
  let ui
  test('should render to the DOM', () => {
    ui = <SearchBar />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })

  test('should render animated styling when props.open: true', () => {
    ui = <StyledWrapper open />
    expect(shallow(ui)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    expect(mount(ui)).toMatchSnapshotWithGlamor(`enzyme.mount`)
    expect(render(ui)).toMatchSnapshotWithGlamor(`enzyme.render`)
  })
})
