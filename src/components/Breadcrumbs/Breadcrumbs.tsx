// // components/Breadcrumbs.tsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { StateType } from '../../types/state-type';

// const Breadcrumbs: React.FC = () => {
//   const breadcrumbs = useSelector((state: StateType) => state.breadcrumbs);

//   return (
//     <div>
//       {breadcrumbs.map((crumb, index) => (
//         <span key={index}>
//           {crumb.url ? (
//             <Link to={crumb.url}>{crumb.name}</Link>
//           ) : (
//             <span>{crumb.name}</span>
//           )}
//           {index < breadcrumbs.length - 1 && ' > '}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default Breadcrumbs;