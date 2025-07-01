// inserir_albuns.js

const { MongoClient, ObjectId } = require("mongodb");

const MONGODB_URI = "mongodb+srv://priscilatorres:1234@cluster0.sdo7umv.mongodb.net/";
const DATABASE_NAME = "musica";
const COLLECTION_NAME = "albuns";

async function listAll(collection) {
  const resultados = await collection.find({}).toArray();

  console.dir(JSON.stringify(resultados[0], null, 2));

  return resultados;
}

async function deleteAll(collection) {
  const resultado = await collection.deleteMany({});
  console.log(`🗑️ Removidos ${resultado.deletedCount} documento(s) da coleção.`);
}


async function insertAlbums(collection) {
  const aditionalAlbumns = [
    {
      _id: new ObjectId(),
      titulo: "The Dark Side of the Moon",
      artista: "Pink Floyd",
      anoLancamento: 1973,
      generos: ["Rock Progressivo", "Rock Psicodélico"],
      formato: "Vinil",
      gravadora: "Harvest Records",
      numeroCatalogo: "SHVL 804",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
      adicionadoEm: new Date("2024-05-17T18:00:00Z"),
      faixas: [
        {
          numero: 1,
          titulo: "Speak to Me",
          duracao_segundos: 67,
          compositores: ["Nick Mason"]
        },
        {
          numero: 2,
          titulo: "Breathe (In the Air)",
          duracao_segundos: 163,
          compositores: ["Roger Waters", "David Gilmour", "Richard Wright"]
        },
        {
          numero: 3,
          titulo: "On the Run",
          duracao_segundos: 216,
          compositores: ["David Gilmour", "Roger Waters"]
        },
        {
          numero: 4,
          titulo: "Time",
          duracao_segundos: 421,
          compositores: ["David Gilmour", "Nick Mason", "Roger Waters", "Richard Wright"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Abbey Road",
      artista: "The Beatles",
      anoLancamento: 1969,
      generos: ["Rock"],
      formato: "Vinil",
      gravadora: "Apple Records",
      numeroCatalogo: "PCS 7088",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
      adicionadoEm: new Date("2024-05-18T12:00:00Z"),
      faixas: [
        {
          numero: 1,
          titulo: "Come Together",
          duracao_segundos: 259,
          compositores: ["Lennon", "McCartney"]
        },
        {
          numero: 2,
          titulo: "Something",
          duracao_segundos: 182,
          compositores: ["George Harrison"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Rumours",
      artista: "Fleetwood Mac",
      anoLancamento: 1977,
      generos: ["Rock"],
      formato: "Vinil",
      gravadora: "Warner Bros. Records",
      numeroCatalogo: "BSK 3010",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/f/fb/FMacRumours.PNG",
      adicionadoEm: new Date("2024-05-19T15:30:00Z"),
      faixas: [
        {
          numero: 1,
          titulo: "Second Hand News",
          duracao_segundos: 168,
          compositores: ["Lindsey Buckingham"]
        },
        {
          numero: 2,
          titulo: "Dreams",
          duracao_segundos: 257,
          compositores: ["Stevie Nicks"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Thriller",
      artista: "Michael Jackson",
      anoLancamento: 1982,
      generos: ["Pop", "Rock", "R&B"],
      formato: "Vinil",
      gravadora: "Epic Records",
      numeroCatalogo: "QE 38112",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
      adicionadoEm: new Date("2024-05-20T09:00:00Z"),
      faixas: [
        {
          numero: 1,
          titulo: "Wanna Be Startin' Somethin'",
          duracao_segundos: 362,
          compositores: ["Michael Jackson"]
        },
        {
          numero: 2,
          titulo: "Thriller",
          duracao_segundos: 358,
          compositores: ["Rod Temperton"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Wish You Were Here",
      artista: "Pink Floyd",
      anoLancamento: 1975,
      generos: ["Rock Progressivo"],
      formato: "Vinil",
      gravadora: "Harvest Records",
      numeroCatalogo: "SHVL 814",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/3/3b/Wish_You_Were_Here_album_cover.jpg",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Shine On You Crazy Diamond (Part I-V)",
          duracao_segundos: 810,
          compositores: ["Roger Waters", "David Gilmour", "Richard Wright"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Animals",
      artista: "Pink Floyd",
      anoLancamento: 1977,
      generos: ["Rock Progressivo"],
      formato: "Vinil",
      gravadora: "Harvest Records",
      numeroCatalogo: "SHVL 815",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/f/f5/Animals-Pink_Floyd.png",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Pigs on the Wing (Part 1)",
          duracao_segundos: 90,
          compositores: ["Roger Waters"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Led Zeppelin IV",
      artista: "Led Zeppelin",
      anoLancamento: 1971,
      generos: ["Rock"],
      formato: "Vinil",
      gravadora: "Atlantic Records",
      numeroCatalogo: "SD 7208",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Black Dog",
          duracao_segundos: 296,
          compositores: ["Jimmy Page", "Robert Plant", "John Paul Jones"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Hotel California",
      artista: "Eagles",
      anoLancamento: 1976,
      generos: ["Rock"],
      formato: "Vinil",
      gravadora: "Asylum Records",
      numeroCatalogo: "7E-1084",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Hotel California",
          duracao_segundos: 390,
          compositores: ["Don Felder", "Don Henley", "Glenn Frey"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Back in Black",
      artista: "AC/DC",
      anoLancamento: 1980,
      generos: ["Hard Rock"],
      formato: "Vinil",
      gravadora: "Atlantic Records",
      numeroCatalogo: "SD 16018",
      urlCapa: "https://upload.wikimedia.org/wikipedia/commons/4/4e/ACDC_Back_in_Black.png",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Hells Bells",
          duracao_segundos: 312,
          compositores: ["Angus Young", "Malcolm Young", "Brian Johnson"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Nevermind",
      artista: "Nirvana",
      anoLancamento: 1991,
      generos: ["Grunge"],
      formato: "CD",
      gravadora: "DGC Records",
      numeroCatalogo: "DGCD-24425",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Smells Like Teen Spirit",
          duracao_segundos: 301,
          compositores: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "OK Computer",
      artista: "Radiohead",
      anoLancamento: 1997,
      generos: ["Alternative Rock"],
      formato: "CD",
      gravadora: "Parlophone",
      numeroCatalogo: "NODATA 02",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/a/a1/Radiohead.okcomputer.albumart.jpg",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Airbag",
          duracao_segundos: 270,
          compositores: ["Thom Yorke", "Jonny Greenwood"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Sgt. Pepper's Lonely Hearts Club Band",
      artista: "The Beatles",
      anoLancamento: 1967,
      generos: ["Rock Psicodélico"],
      formato: "Vinil",
      gravadora: "Parlophone",
      numeroCatalogo: "PMC 7027",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/6/67/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Sgt. Pepper's Lonely Hearts Club Band",
          duracao_segundos: 122,
          compositores: ["Lennon", "McCartney"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "Born to Run",
      artista: "Bruce Springsteen",
      anoLancamento: 1975,
      generos: ["Rock"],
      formato: "Vinil",
      gravadora: "Columbia Records",
      numeroCatalogo: "PC 33795",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/0/0c/Born_to_Run_(Front_Cover).jpg",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Born to Run",
          duracao_segundos: 270,
          compositores: ["Bruce Springsteen"]
        }
      ]
    },
    {
      _id: new ObjectId(),
      titulo: "The Wall",
      artista: "Pink Floyd",
      anoLancamento: 1979,
      generos: ["Rock Progressivo"],
      formato: "Vinil",
      gravadora: "Harvest Records",
      numeroCatalogo: "SHDW 411",
      urlCapa: "https://upload.wikimedia.org/wikipedia/en/1/13/Pink_Floyd_-_The_Wall_cover.png",
      adicionadoEm: new Date(),
      faixas: [
        {
          numero: 1,
          titulo: "Another Brick in the Wall, Part 2",
          duracao_segundos: 239,
          compositores: ["Roger Waters", "David Gilmour"]
        }
      ]
    }
  ];

  const resultado = await collection.insertMany(aditionalAlbumns);
  console.log(`Inseridos ${resultado.insertedCount} albuns adicionais`);
}

async function countAlbumnsPerArtist(collection) {
  const pipeline = [
    {
      $group: {
        _id: "$artista",
        totalDiscos: { $sum: 1 }
      }
    },
    {
      $sort: { totalDiscos: -1 } // Ordena do maior para o menor
    }
  ];

  const resultados = await collection.aggregate(pipeline).toArray();

  console.log("🎵 Quantidade de discos por artista:");
  resultados.forEach((artista) => {
    console.log(`- ${artista._id}: ${artista.totalDiscos}`);
  });
}

async function correctYearReleased(collection, tituloAlbum, novoAno) {
  const filtro = { titulo: tituloAlbum };
  const atualizacao = { $set: { anoLancamento: novoAno } };

  const resultado = await collection.updateOne(filtro, atualizacao);

  if (resultado.matchedCount === 0) {
    console.log(`⚠️ Nenhum álbum encontrado com o título "${tituloAlbum}".`);
  } else if (resultado.modifiedCount === 1) {
    console.log(`✅ Ano de lançamento atualizado para ${novoAno} no álbum "${tituloAlbum}".`);
  } else {
    console.log(`ℹ️ O ano de lançamento já estava como ${novoAno} no álbum "${tituloAlbum}".`);
  }
}

async function removeNumeroCatalogo(collection) {
  const atualizacao = { $unset: { numeroCatalogo: "" } };

  const resultado = await collection.updateMany({}, atualizacao);

  console.log(`✅ Campo "numeroCatalogo" removido de ${resultado.modifiedCount} documento(s).`);
}

async function calcTotalDurationAlbumns(collection) {
  const pipeline = [
    {
      $project: {
        titulo: 1,
        artista: 1,
        duracaoTotalSegundos: {
          $sum: "$faixas.duracao_segundos"
        }
      }
    },
    {
      $sort: { titulo: 1 }
    }
  ];

  const resultados = await collection.aggregate(pipeline).toArray();

  console.log("🎵 Duração total de cada álbum:");
  resultados.forEach((album) => {
    const minutos = album.duracaoTotalSegundos / 60;
    console.log(`- "${album.titulo}" (${album.artista}): ${minutos.toFixed(2)} minutos`);
  });
}

async function addAlbumnGenre(collection, tituloAlbum, novoGenero) {
  const filtro = { titulo: tituloAlbum };
  const atualizacao = { $addToSet: { generos: novoGenero } };

  const resultado = await collection.updateOne(filtro, atualizacao);

  if (resultado.matchedCount === 0) {
    console.log(`⚠️ Nenhum álbum encontrado com o título "${tituloAlbum}".`);
  } else if (resultado.modifiedCount === 1) {
    console.log(`✅ Gênero "${novoGenero}" adicionado ao álbum "${tituloAlbum}".`);
  } else {
    console.log(`ℹ️ O gênero "${novoGenero}" já estava presente no álbum "${tituloAlbum}".`);
  }
}

async function listSongsOfCompositian(collection, compositores) {
  const pipeline = [
    { $unwind: "$faixas" },
    {
      $match: {
        "faixas.compositores": compositores
      }
    },
    {
      $project: {
        _id: 0,
        tituloAlbum: "$titulo",
        artista: "$artista",
        tituloFaixa: "$faixas.titulo",
        duracaoSegundos: "$faixas.duracao_segundos"
      }
    },
    {
      $sort: { tituloAlbum: 1, tituloFaixa: 1 }
    }
  ];

  const resultados = await collection.aggregate(pipeline).toArray();

  if (resultados.length === 0) {
    console.log(`⚠️ Nenhuma música encontrada com ${compositores} como compositor.`);
  } else {
    console.log(`🎵 Músicas compostas por ${compositores}:`);
    resultados.forEach((musica) => {
      const minutos = (musica.duracaoSegundos / 60).toFixed(2);
      console.log(`- "${musica.tituloFaixa}" (${musica.tituloAlbum}, ${musica.artista}) – ${minutos} min`);
    });
  }
}

async function listSongsOfSingleCompositian(collection, compositor) {
  const pipeline = [
    { $unwind: "$faixas" },
    {
      $match: {
        "faixas.compositores": compositor,
        $expr: { $eq: [{ $size: "$faixas.compositores" }, 1] }
      }
    },
    {
      $project: {
        _id: 0,
        tituloAlbum: "$titulo",
        artista: "$artista",
        tituloFaixa: "$faixas.titulo",
        duracaoSegundos: "$faixas.duracao_segundos"
      }
    },
    {
      $sort: { tituloAlbum: 1, tituloFaixa: 1 }
    }
  ];

  const resultados = await collection.aggregate(pipeline).toArray();

  if (resultados.length === 0) {
    console.log(`⚠️ Nenhuma música encontrada composta exclusivamente por "${compositor}".`);
  } else {
    console.log(`🎵 Músicas compostas somente por "${compositor}":`);
    resultados.forEach((musica) => {
      const minutos = (musica.duracaoSegundos / 60).toFixed(2);
      console.log(`- "${musica.tituloFaixa}" (${musica.tituloAlbum}, ${musica.artista}) – ${minutos} min`);
    });
  }
}

async function correctCompositorName(collection, nomeErrado, nomeCorreto) {
  const resultado = await collection.updateMany(
    {
      "faixas.compositores": nomeErrado
    },
    [
      {
        $set: {
          faixas: {
            $map: {
              input: "$faixas",
              as: "faixa",
              in: {
                numero: "$$faixa.numero",
                titulo: "$$faixa.titulo",
                duracao_segundos: "$$faixa.duracao_segundos",
                compositores: {
                  $map: {
                    input: "$$faixa.compositores",
                    as: "comp",
                    in: {
                      $cond: [
                        { $eq: ["$$comp", nomeErrado] },
                        nomeCorreto,
                        "$$comp"
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      }
    ]
  );

  console.log(`✅ Nome do compositor alterado em ${resultado.modifiedCount} documento(s).`);
}

async function removeAlbumsByCompositor(collection, compositor) {
  const filtro = {
    "faixas.compositores": compositor
  };

  const resultado = await collection.deleteMany(filtro);

  console.log(`✅ Removidos ${resultado.deletedCount} álbum(s) que contêm músicas compostas por "${compositor}".`);
}

async function calcMixesByDiscos(collection) {
  const pipeline = [
    {
      $group: {
        _id: "$artista",
        totalAlbuns: { $sum: 1 },
        totalFaixas: { $sum: { $size: "$faixas" } }
      }
    },
    {
      $project: {
        _id: 0,
        artista: "$_id",
        totalAlbuns: 1,
        totalFaixas: 1,
        mediaFaixasPorAlbum: {
          $round: [
            { $divide: ["$totalFaixas", "$totalAlbuns"] },
            2
          ]
        }
      }
    },
    {
      $sort: { artista: 1 }
    }
  ];

  const resultados = await collection.aggregate(pipeline).toArray();

  if (resultados.length === 0) {
    console.log(`⚠️ Nenhum dado encontrado.`);
  } else {
    console.log(`🎵 Média de faixas por disco para cada artista:`);
    resultados.forEach((artista) => {
      console.log(
        `- ${artista.artista}: ${artista.mediaFaixasPorAlbum} faixas em média (${artista.totalAlbuns} álbuns, ${artista.totalFaixas} faixas no total)`
      );
    });
  }
}

async function removerUltimaFaixaSeCompositor(collection, compositor) {
  const albuns = await collection
    .find({
      faixas: {
        $exists: true,
        $ne: []
      }
    })
    .toArray();

  let removidos = 0;

  for (const album of albuns) {
    const faixas = album.faixas;
    const ultimaFaixa = faixas[faixas.length - 1];

    if (ultimaFaixa.compositores.includes(compositor)) {
      const novasFaixas = faixas.filter((f, i) => i !== faixas.length - 1);

      await collection.updateOne(
        { _id: album._id },
        { $set: { faixas: novasFaixas } }
      );

      console.log(
        `✅ Removida a última faixa "${ultimaFaixa.titulo}" do álbum "${album.titulo}" (${album.artista}).`
      );

      removidos++;
    }
  }

  if (removidos === 0) {
    console.log(`⚠️ Nenhuma faixa removida. Nenhum álbum tinha a última faixa com o compositor "${compositor}".`);
  } else {
    console.log(`🎵 Total de álbuns atualizados: ${removidos}`);
  }
}


async function run() {
  const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("✅ Conectado ao MongoDB Atlas");

    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // await insertAlbums(collection);

    // await correctYearReleased(collection, "The Dark Side of the Moon", 1974);
    // await removeNumeroCatalogo(collection);
    // await calcTotalDurationAlbumns(collection);
    // await addAlbumnGenre(collection, "The Dark Side of the Moon", "Classic Rock");
    // await listSongsOfCompositian(collection, "Roger Waters");
    // await listSongsOfSingleCompositian(collection, "Roger Waters");
    // await correctCompositorName(collection, "Roger Waters", "Roger Waters 2");
    // await correctCompositorName(collection, "Roger Waters 2", "Roger Waters");
    // await removeAlbumsByCompositor(collection, "Roger Waters");
    // await calcMixesByDiscos(collection);
    // await removerUltimaFaixaSeCompositor(collection, "Lennon");

    // await listAll(collection);
    // await deleteAll(collection);

  } catch (err) {
    console.error("❌ Erro:", err);
  } finally {
    await client.close();
    console.log("🔒 Conexão fechada");
  }
}
run();
