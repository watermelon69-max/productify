import { db } from "./index";
import { users, products, comments } from "./schema";

async function seed() {
  console.log("🌱 Seeding database...");

  const sampleUsers = [
    {
      id: "user_2a1b2c3d4e5f6g7h8i9j0k",
      email: "alice@example.com",
      name: "Alice Chen",
      imageUrl: "https://picsum.photos/seed/alice/200/200",
    },
    {
      id: "user_2b2c3d4e5f6g7h8i9j0k1l",
      email: "bob@example.com",
      name: "Bob Martinez",
      imageUrl: "https://picsum.photos/seed/bob/200/200",
    },
    {
      id: "user_2c3d4e5f6g7h8i9j0k1l2m",
      email: "charlie@example.com",
      name: "Charlie Kim",
      imageUrl: "https://picsum.photos/seed/charlie/200/200",
    },
  ];

  await db.insert(users).values(sampleUsers).onConflictDoNothing();
  console.log(`  ✓ ${sampleUsers.length} users`);

  const sampleProducts = [
    {
      id: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
      title: "Minimalist Desk Lamp",
      description: "A sleek, adjustable LED desk lamp with wireless charging base. Three brightness levels and a warm neutral light perfect for late-night work sessions.",
      userId: sampleUsers[0].id,
      imageUrl: "https://picsum.photos/seed/lamp/600/400",
    },
    {
      id: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
      title: "Handcrafted Ceramic Mug",
      description: "Stoneware mug with hand-painted geometric patterns in indigo and terracotta. Holds 12oz. Microwave and dishwasher safe. Each piece is unique.",
      userId: sampleUsers[0].id,
      imageUrl: "https://picsum.photos/seed/mug/600/400",
    },
    {
      id: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
      title: "Eco-Friendly Tote Bag",
      description: "Heavy-duty canvas tote made from recycled materials. Reinforced stitching, interior pocket, and extra-long handles. Holds up to 30lbs.",
      userId: sampleUsers[1].id,
      imageUrl: "https://picsum.photos/seed/tote/600/400",
    },
    {
      id: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
      title: "Bamboo Phone Stand",
      description: "Adjustable bamboo phone stand compatible with all phones and tablets up to 13 inches. Foldable design makes it perfect for travel. Natural finish.",
      userId: sampleUsers[1].id,
      imageUrl: "https://picsum.photos/seed/stand/600/400",
    },
    {
      id: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
      title: "Leather Journal",
      description: "A5 genuine leather journal with 200 pages of acid-free cream paper. Lay-flat binding, elastic closure, ribbon bookmark, and pen loop. Ages beautifully.",
      userId: sampleUsers[2].id,
      imageUrl: "https://picsum.photos/seed/journal/600/400",
    },
    {
      id: "f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c",
      title: "Plant Propagation Station",
      description: "Wall-mounted glass propagation station for plant cuttings. Set of 5 borosilicate glass tubes on a warm bamboo shelf. Hardware included.",
      userId: sampleUsers[2].id,
      imageUrl: "https://picsum.photos/seed/propagation/600/400",
    },
    {
      id: "a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d",
      title: "Wireless Earbuds Case",
      description: "Slim silicone protective case with carabiner clip. Fits AirPods and most wireless earbuds. Available in 4 earth-tone colors.",
      userId: sampleUsers[0].id,
      imageUrl: "https://picsum.photos/seed/earbuds/600/400",
    },
    {
      id: "b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e",
      title: "Wooden Chess Set",
      description: "Hand-carved sheesham wood chess set with felted base. Board folds into a storage box. 32 pieces, 2.5 inch king. Perfect for travel.",
      userId: sampleUsers[1].id,
      imageUrl: "https://picsum.photos/seed/chess/600/400",
    },
  ];

  await db.insert(products).values(sampleProducts).onConflictDoNothing();
  console.log(`  ✓ ${sampleProducts.length} products`);

  const sampleComments = [
    { content: "This looks amazing! How long does shipping usually take?", userId: sampleUsers[1].id, productId: sampleProducts[0].id },
    { content: "I bought this last month and absolutely love it. The build quality is fantastic.", userId: sampleUsers[2].id, productId: sampleProducts[0].id },
    { content: "Does this come in different colors?", userId: sampleUsers[0].id, productId: sampleProducts[2].id },
    { content: "The material feels really premium. Highly recommend!", userId: sampleUsers[2].id, productId: sampleProducts[2].id },
    { content: "Perfect gift idea! My friend loved it.", userId: sampleUsers[0].id, productId: sampleProducts[4].id },
    { content: "Can you share the care instructions for the leather?", userId: sampleUsers[1].id, productId: sampleProducts[4].id },
    { content: "This propagation station looks beautiful on my wall. Great product!", userId: sampleUsers[0].id, productId: sampleProducts[5].id },
  ];

  await db.insert(comments).values(sampleComments).onConflictDoNothing();
  console.log(`  ✓ ${sampleComments.length} comments`);

  console.log("✅ Seeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
