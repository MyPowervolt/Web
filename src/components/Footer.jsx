function Footer() {
  return (
    <footer className="bg-black/10 text-gray-100 py-10 px-6 md:px-20 border-t-2 border-yellow-400 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-yellow-400">Powervolt</h2>
          <p className="text-gray-300">
            Impianti elettrici civili e industriali
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">Contatti</h3>
          <address className="not-italic space-y-1 text-gray-300">
            <p>
              📞{" "}
              <a
                href="tel:+393932826533"
                className="hover:text-yellow-400 transition-colors"
              >
                +39 3932826533
              </a>
            </p>
            <p>
              📩{" "}
              <a
                href="mailto:info@powervolt.it"
                className="hover:text-yellow-400 transition-colors"
              >
                info@powervolt.it
              </a>
            </p>
            <p>📍 Zola Predosa (BO)</p>
          </address>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-yellow-400">
            Dati aziendali
          </h3>
          <p className="text-gray-300">P. IVA 04351091204</p>
          <p className="text-gray-300">
            PEC:{" "}
            <a
              href="mailto:amministrazione@pec.powervolt.it"
              className="hover:text-yellow-400 transition-colors"
            >
              amministrazione@pec.powervolt.it
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Powervolt – Tutti i diritti riservati
      </div>
    </footer>
  );
}

export default Footer;
