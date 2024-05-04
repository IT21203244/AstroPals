import PropTypes from 'prop-types';

const SideBar = ({ onClose }) => {
  return (
    <div className="sidebar z-15 flex w-full h-full bg-black" style={{ position: "absolute", top: 0, right: 0}}>
      <h2 className="text-white text-5xl font-medium pl-7 py-2">The Brutal Martian Landscape</h2>
      <div>
        <button onClick={onClose}>Close</button> {/* Add a close button */}
        <p className="text-white text-2xl font-normal pl-7 ml-10">Description</p>
        <p className="text-white pl-7 ml-10">The common surface features of Mars include dark slope streaks, dust devil tracks, sand dunes, 
          Medusae Fossae Formation, fretted terrain, layers, gullies, glaciers, scalloped topography, chaos terrain, 
          possible ancient rivers, pedestal craters, brain terrain, and ring mold craters.</p>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default SideBar;
