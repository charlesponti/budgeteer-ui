import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';

// Redux Connected Component

export const RepositoryList = ({ repositories, selectedRepositoryIds }) => (
  <ul>
    {repositories.edges.map(({ node }) => {
      const isSelected = selectedRepositoryIds.includes(node.id);

      const rowClassName = ['row'];

      if (isSelected) {
        rowClassName.push('row_selected');
      }

      return (
        <li className={rowClassName.join(' ')} key={node.id}>
          <SelectContainer id={node.id} isSelected={isSelected} />
          {' '}
          <a href={node.url}>{node.name}</a>
          {' '}
          {!node.viewerHasStarred && <Star id={node.id} />}
        </li>
      );
    })}
  </ul>
);

const mapStateToProps = (state) => ({
  selectedRepositoryIds: state.selectedRepositoryIds,
});

const Repositories = connect(mapStateToProps)(RepositoryList);

// Redux Connected Component

const Select = ({ isSelected, toggleSelectRepository }) => (
  <button type="button" onClick={toggleSelectRepository}>
    {isSelected ? 'Unselect' : 'Select'}
  </button>
);

const mapDispatchToProps = (dispatch, { id, isSelected }) => ({
  toggleSelectRepository: () => dispatch({
    type: 'TOGGLE_SELECT_REPOSITORY',
    id,
    isSelected,
  }),
});

const SelectContainer = connect(null, mapDispatchToProps)(Select);

// Apollo "Connected" Component

const Star = ({ id }) => (
  <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
    {(starRepository) => (
      <button type="button" onClick={starRepository}>
        Star
      </button>
    )}
  </Mutation>
);
