import Plan from "@/types/plan";


const plans: Plan[] = [
  {
    id: 1,
    name: "Standard",
    duration: 6,
    price: 4800,
    priceMonth: 800,
    active: false,
  },
  {
    id: 2,
    name: "Fitness",
    duration: 12,
    price: 7200,
    priceMonth: 600,
    active: true,
  },
  {
    id: 3,
    name: "Enterprice",
    duration: 24,
    price: 12000,
    priceMonth: 500,
    active: false,
  },
];

export default plans;