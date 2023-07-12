// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";

// function MaterialTable({ columns, rows }) {
//   return (
//     <>
//       <TableContainer component={Paper}>
//         <Table aria-label="simple table">
//           <TableHead bgcolor="#FFFFFF" sx={{ border: "1px solid #B3C3CA" }}>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   width={column.width}
//                   sx={{ color: "#343A40", textAlign: column.start }}
//                   key={column.id}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id}>
//                 {columns.map((column) => (
//                   <TableCell key={column.id} sx={{ textAlign: column.align }}>
//                     {row[column.id]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }

// export default MaterialTable;
