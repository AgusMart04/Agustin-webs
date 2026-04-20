import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xykleyzy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          form.reset();
        }, 2000);
      } else {
        alert("Hubo un error al enviar el formulario. Por favor, intenta nuevamente.");
      }
    } catch (error) {
      alert("Hubo un error al enviar el formulario. Por favor, intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Envíame un mensaje</DialogTitle>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="text-4xl mb-4">✅</div>
            <p className="text-lg font-semibold text-foreground">¡Mensaje enviado con éxito!</p>
            <p className="text-muted-foreground mt-2">Te responderé pronto.</p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xykleyzy"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Nombre *</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="business">Negocio *</Label>
              <Input
                id="business"
                name="business"
                required
                placeholder="Nombre de tu negocio"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="needs">¿Qué necesitas? (opcional)</Label>
              <Textarea
                id="needs"
                name="needs"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contact">WhatsApp o Gmail *</Label>
              <Input
                id="contact"
                name="contact"
                required
                placeholder="Tu WhatsApp o correo"
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 gradient-cta text-accent-foreground font-bold hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
