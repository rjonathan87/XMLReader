const processRow = (i, row) => {
  let finalVal = "";

  let convertDescription = row.Descripcion.replace(/(\n)/g, " ");

  finalVal += `[${i}]`;
  finalVal += "\n";
  finalVal += `BienesTransp=${row.BienesTransp}`;
  finalVal += "\n";
  finalVal += `Descripcion=${convertDescription}`;
  finalVal += "\n";
  finalVal += `Cantidad=${row.Cantidad}`;
  finalVal += "\n";
  finalVal += `ClaveUnidad=${row.ClaveUnidad}`;
  finalVal += "\n";
  finalVal += `Unidad=${row.Unidad}`;
  finalVal += "\n";
  finalVal += `CveMaterialPeligroso=${row.CveMaterialPeligroso}`;
  finalVal += "\n";
  finalVal += `Embalaje=${row.Embalaje}`;
  finalVal += "\n";
  finalVal += `DescripEmbalaje=${row.DescripEmbalaje}`;
  finalVal += "\n";
  finalVal += `PesoEnKg=${row.PesoEnKg}`;
  finalVal += "\n";
  finalVal += `ValorMercancia=${row.ValorMercancia}`;
  finalVal += "\n";
  finalVal += `Moneda=${row.Moneda}`;
  finalVal += "\n";
  finalVal += `FraccionArancelaria=${row.FraccionArancelaria}`;
  finalVal += "\n";
  finalVal += `UUIDComercioExt=${row.UUIDComercioExt}`;
  finalVal += "\n";
  finalVal += `Pedimentos=${row.Pedimentos}`;

  return finalVal + "\n";
};

const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  return saved
}

export {
  processRow,
  getStorageValue
}